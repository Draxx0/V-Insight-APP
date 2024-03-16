import { INPUT_CLASSES } from '../../../constants/ui/classes.constants';
import { SignupAuthFormFieldProps } from '../../../types/auth';

const SignupFormField: React.FC<SignupAuthFormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      className={`${INPUT_CLASSES.normal} ${error ? INPUT_CLASSES.error : ''}`}
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
    />
    {error && <small className="text-red-500">{error.message}</small>}
  </>
);
export default SignupFormField;
