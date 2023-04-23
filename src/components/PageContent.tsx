import classes from "../components/PageContent.module.css";

interface content {
  title: string;
  children: React.ReactNode;
}

const PageContent = ({ title, children }: content) => {
  return (
    <section className={classes.pageContent_frame}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default PageContent;
