import Title from "../../components/Title";

export default function Detail({ params, result }) {
  const [title, id] = params || [];
  return (
    <div className="container">
      <Title title={title} />
      <h4>{title || "Loading..."}</h4>
      <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} />
      <h5>{result.overview}</h5>
      <style jsx>{`
        .container {
          display: flex;
          flex-flow: column nowrap;
          padding: 20px;
        }
        .container img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .container h4 {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const result = await (
    await fetch(`http://localhost:3000/api/movies/${params[1]}`)
  ).json();
  console.log(result);
  return {
    props: {
      params,
      result,
    },
  };
}
