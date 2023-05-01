import PageLayout from "../components/PageLayout";

const message = "خاک به سرم. مگه نمیگم قصه ما به سر رسید چرا هی میزنی بعدی.";

const OhNo = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={13} />;
};

export default OhNo;
