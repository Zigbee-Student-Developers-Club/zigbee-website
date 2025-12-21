import Card from "./card";
import { resourceData } from "./constants";

const Resources = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-3 md:p-6">
      {resourceData.map(resource => (
        <Card key={resource.category} {...resource} />
      ))}
    </div>
  );
};

export default Resources;
