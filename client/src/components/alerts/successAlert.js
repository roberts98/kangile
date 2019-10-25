import { toast } from 'react-toastify';

function succesAlert(text) {
  toast.success(text, {
    position: toast.POSITION.BOTTOM_RIGHT
  });
}

export default succesAlert;
