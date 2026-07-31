import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

const Grid = () => {

  return (
    <section className="min-h-screen py-8 px-4"> {/* Changed from max-h to min-h */}
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem 
            key={item.id} 
            {...item}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;