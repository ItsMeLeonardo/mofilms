import ActorCardLoader from "components/Actor/ActorCard/Loaders";

export default function ActorCardListLoader({ length }: { length: number }) {
  return (
    <>
      <div className="container">
        {[...new Array(length)].map((_, index) => (
          <ActorCardLoader key={index} />
        ))}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: 0.75rem;
        }
      `}</style>
    </>
  );
}
