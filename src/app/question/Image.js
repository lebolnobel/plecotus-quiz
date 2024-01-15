import * as React from "react";

const Image = (props) => {
  const { author, image } = props;

  return (
    <div className="image">
      <img src={image?.url || "https://via.placeholder.com/400x250"} />
      <span className="flex-right">
        {image?.description && (
          <>
            {image.description}
            <br />
          </>
        )}

        {image?.place || "Lieu inconnu"}
        <br />
        {!author ? "Anonyme" : `${author.firstname} ${author.name}`}
      </span>
    </div>
  );
};

export default Image;
