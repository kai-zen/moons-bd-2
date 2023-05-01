import PageLayout from "../components/PageLayout";

const message =
  "مثل اینکه متاسفانه این روش کار نکرد و تو هم قورباغه شدی. قصه ما به سر رسید پریماه به خونش نرسیییید";

const TwoFrogs = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={12} />;
};

export default TwoFrogs;
