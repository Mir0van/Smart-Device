import {initPhoneInput} from './modules/form-validate/init-phone-input.js';

const activateTelMask = () => {
  const inputTelParents = document.querySelectorAll('.form__input-tel');

  inputTelParents.forEach((inputTelParent) => {
    initPhoneInput(inputTelParent);
  });
};

export {activateTelMask};
