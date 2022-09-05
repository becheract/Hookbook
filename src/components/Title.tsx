interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <>
      <h1 style={{ padding: "20px" }}>{title}</h1>
    </>
  );
};

export default Title;
