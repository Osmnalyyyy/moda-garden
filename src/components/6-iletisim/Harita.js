import React from "react";
import { Button, Card } from "react-bootstrap";

const Harita = () => {
  return (
    <Card>
      <div>
        <iframe
          title="Moda Garden Cafe & Bistro"
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d196.83378271446526!2d30.851399977432035!3d37.87571845581107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d37.8757246!2d30.8514138!5e0!3m2!1str!2str!4v1675763087812!5m2!1str!2str"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Button
          variant="warning
        "
        >
          <a
            class="PDvGL q8cvFf"
            href="https://www.google.com/maps/dir//Moda+Garden+Cafe/data=!4m8!4m7!1m0!1m5!1m1!1s0x14c5a137c4cb9c45:0x6a6f6eaf1119dcdd!2m2!1d30.848817999999998!2d37.872493"
            target="_blank"
            data-tracking-element-type="6"
            jslog="56039; track:impression,click"
          >
            Yol tarifi al
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default Harita;
