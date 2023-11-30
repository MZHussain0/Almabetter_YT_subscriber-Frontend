import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { isValidObjectId } from "../../utils/utils";
import CodeBlock from "../components/CodeBlock";

const SingleSubscriberPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the subscriber data when the component mounts
  useEffect(() => {
    // Check if the ID is valid
    if (!isValidObjectId(id)) {
      setError(`No subscribeer found with ID: ${id}`);
      setLoading(false);
      return;
    }

    // Fetch the subscriber data from the API
    axios
      .get(`/subscribers/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message || "An unexpected error occurred";
        setError(errorMessage);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message or subscriber details
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        data && (
          <CodeBlock
            data={JSON.stringify(data, null, 2)}
            text={`Details of ID: ${id}`}
          />
        )
      )}
    </div>
  );
};

export default SingleSubscriberPage;
