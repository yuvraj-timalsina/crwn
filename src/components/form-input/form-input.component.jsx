import {
  FormInputContainer,
  FormInputLabel,
  InputElement
} from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormInputContainer>
      <InputElement {...otherProps} />
      {label && (
        <FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      )}
    </FormInputContainer>
  );
};

export default FormInput;
