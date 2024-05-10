import Dialog from "./Dialog";

function DialogContainer() {
  return (
    <>
    {/* WelcomDialog */}
    <Dialog
      title="어서오세요."
      message="저희 우주선을 찾아주셔서 감사합니다!"
      color="blue"
    />

    {/* AlterDialog */}
    <Dialog
      title="경고합니다!"
      message="오지마라했다."
      color="red"
    />
    </>
  );
};

export default DialogContainer;