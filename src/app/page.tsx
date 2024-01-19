import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#f3e6d8] flex justify-center items-center">
      <div className="max-w-[600px] w-full bg-white p-5 md:rounded-xl md:m-5 flex flex-col gap-5">
        {/* image */}
        <div>
          <Image src='/assets/images/image-omelette.jpeg' alt='image-omelette' width={600} height={200} className="md:rounded-xl w-full"/>
        </div>

        {/* heading */}
        <div>
          <h1 className="text-4xl font-serif font-semibold">Simple Omelette Recipe</h1>
        </div>

        {/* description */}
        <div>
          <p className="text-sm">
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </div>

        {/* preparation time */}
        <div className="bg-[#fff5fa] p-5 rounded-xl flex flex-col gap-4">
          <div className="text-lg text-[#7b284f] font-semibold">Preparation Time</div>
          <ul className="flex flex-col gap-2 list-disc ml-7 text-[#302d2c]">
            <li>
              <span className="font-semibold mr-2">Total:</span>
              <span>Approximately 10 minutes</span>
            </li>
            <li>
              <span className="font-semibold mr-2">Preparation:</span>
              <span>5 minutes</span>
            </li>
            <li>
              <span className="font-semibold mr-2">Cooking:</span>
              <span>5 minutes</span>
            </li>
          </ul>
        </div>

        {/* ingredients */}
        <div className="flex flex-col gap-4">
          <div className="text-[#854632] text-3xl font-serif font-semibold">Ingredients</div>
          <ul className="list-disc ml-7 flex flex-col gap-2">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <hr />

        {/* instruction */}
        <div className="flex flex-col gap-4">
          <div className="text-[#854632] text-3xl font-serif font-semibold">
            Instructions
          </div>
          <ol className="flex flex-col gap-2 list-decimal ml-7 text-[#302d2c]">
            <li>
              <span className="font-semibold mr-2">Beat the eggs:</span>
              <span>
                In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-2">Heat the pan:</span>
              <span>
                Place a non-stick frying pan over medium heat and add butter or oil.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-2">Cook the omelette:</span>
              <span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-2">Add fillings (optional):</span>
              <span>
                When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
              </span>  
            </li>
            <li>
              <span className="font-semibold mr-2">Fold and serve:</span>
              <span>
                As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
              </span>
            </li>
            <li>
              <span className="font-semibold mr-2">Enjoy:</span>
              <span>
                Serve hot, with additional salt and pepper if needed.
              </span>
            </li>
          </ol>
        </div>

        <hr />

        {/* nutrition */}
        <div className="flex flex-col gap-4 text-[#854632]">
          <div className="text-3xl font-serif font-semibold">Nutrition</div>
          <div className="text-sm">
            The table below shows nutritional values per serving without the additional fillings.
          </div>
          <table className="divide-y">
            <tr className="flex py-2 px-5">
              <p className="w-72">Calories</p>
              <p className="font-semibold">277kcal</p>
            </tr>
            <tr className="flex py-2 px-5">
              <p className="w-72">Carbs</p>
              <p className="font-semibold">0g</p>
            </tr>
            <tr className="flex py-2 px-5">
              <p className="w-72">Protein</p>
              <p className="font-semibold">20g</p>
            </tr>
            <tr className="flex py-2 px-5">
              <p className="w-72">Fat</p>
              <p className="font-semibold">22g</p>
            </tr>
          </table>
        </div>
       
      </div>
    </main>
  );
}
