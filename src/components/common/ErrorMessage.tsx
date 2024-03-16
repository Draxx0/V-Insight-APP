const ErrorMessage = ({ error }: { error: unknown }) => {
  return (
    <>
      {error instanceof Error && (
        <small className="text-red-500">
          {error?.message} , please try again.
        </small>
      )}
    </>
  );
};

export default ErrorMessage;
