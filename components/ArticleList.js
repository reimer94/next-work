import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {!articles
        ? "cargando..."
        : articles.map((article, index) => {
            return <ArticleItem key={index} article={article} />;
          })}
    </div>
  );
};

export default ArticleList;
