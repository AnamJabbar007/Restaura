import Image from "next/image";

const DishCard = ({ project }) => {
  return (
    <div className="rounded-3xl shadow-lg overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
