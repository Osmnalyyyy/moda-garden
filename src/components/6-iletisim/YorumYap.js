import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { sendMessage } from "../../api/message";
import { gonderimMesaji } from "./swalMessage";

const YorumYap = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    phoneNumber: "",
    point: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string(),
    phoneNumber: Yup.number(),
    point: Yup.number()
      .max(10, "En fazla 10 puan verebilirsiniz")
      .min(0, "En düşük 0 puan verebilirsiniz")
      .required("Lütfen puanınızı giriniz"),
    message: Yup.string()
      .max(100, "Mesajınız en fazla 100 karakter içerebilir")
      .min(5, "Mesajınız en az 5 karakter içerebilir")
      .required("lütfen yorumunuzu giriniz"),
  });
  const onSubmit = async (values) => {
    setLoading(true);

    try {
      await sendMessage(values);
      formik.resetForm();
      gonderimMesaji("Yorumunuz başarıyla gönderilmiştir", "success", 3000);
    } catch (err) {
      alert("err.response.data.message");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>İsim Soyisim</Form.Label>
          <Form.Control
            type="text"
            placeholder="Lütfen adınızı giriniz"
            {...formik.getFieldProps("name")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Telefon Numarası</Form.Label>
          <Form.Control
            type="number"
            placeholder="Lütfen telefon numaranızı giriniz"
            {...formik.getFieldProps("phoneNumber")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Puanınızı giriniz</Form.Label>
          <Form.Control
            type="number"
            placeholder="Lütfen puanınızı giriniz"
            {...formik.getFieldProps("point")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Yorumunuzu Yazınız</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows="5"
            placeholder="Lütfen yorumunuzu giriniz"
            {...formik.getFieldProps("message")}
            isInvalid={formik.touched.message && !!formik.errors.message}
            isValid={formik.touched.message && !formik.errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          disbled={!(formik.dirty && formik.isValid) || loading}
        >
          {loading && <Spinner animation="border" size="sm" />}
          Gönder
        </Button>
      </Form>
    </>
  );
};

export default YorumYap;
