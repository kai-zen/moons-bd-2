/* eslint-disable react-hooks/exhaustive-deps */
import PageLayout from "../components/PageLayout";

const message =
  "اما اون نمیدونست که روح سرگردان خبیث جزیره به خوشحال دیدن اون ها و اهمیت علی برای ماه حسودی میکنه و نقشه های پلیدی توی سرش داره";

const TheGhost = ({ level }) => {
  return <PageLayout message={message} currentLevel={level} level={1} />;
};

export default TheGhost;
