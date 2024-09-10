export default function NewsDetailsPage({ params }) {
    return (
      <>
        <h1>News</h1>
        <p>{params.slug}</p>
      </>
    );
  }
  