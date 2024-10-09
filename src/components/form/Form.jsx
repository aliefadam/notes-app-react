import FormBody from "./FormBody";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

const Form = ({
  title,
  onChangeTitle,
  body,
  onChangeBody,
  onSubmit,
  charCount,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      action=""
      className="order-last lg:order-first border border-t shadow-md rounded-md flex-[1] p-5 h-fit"
    >
      <FormHeader />
      <FormBody
        body={body}
        title={title}
        charCount={charCount}
        onChangeBody={onChangeBody}
        onChangeTitle={onChangeTitle}
      />
      <FormFooter />
    </form>
  );
};

export default Form;
