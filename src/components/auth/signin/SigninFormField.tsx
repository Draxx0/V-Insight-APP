import { INPUT_CLASSES } from '../../../constants';
import { SigninAuthFormFieldProps } from '../../../types/auth';

const SigninFormField: React.FC<SigninAuthFormFieldProps> = ({
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
export default SigninFormField;
