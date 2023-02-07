import Swal from "sweetalert2";

export const gonderimMesaji = (title, icon = "info", timer = 4000) => {
  //success  | warning | question | error | info
  Swal.fire({
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 3000,
  });
};
