import FormBodyInputBody from "./FormBodyInputBody";
import FormBodyInputTitle from "./FormBodyInputTitle";

const FormBody = ({ title, onChangeTitle, body, onChangeBody, charCount }) => {
  return (
    <div className="flex flex-col mt-3 gap-3">
      <FormBodyInputTitle
        title={title}
        onChange={onChangeTitle}
        charCount={charCount}
      />
      <FormBodyInputBody onChange={onChangeBody} body={body} />
    </div>
  );
};

export default FormBody;
