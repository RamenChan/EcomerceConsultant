import React, { useEffect, useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import api from "../abdi/axios";

const HeroSection = () => {
  const [heroItems, setHeroItems] = useState([]);

  useEffect(() => {
    const fetchHeroItems = async () => {
      try {
        const response = await api.get("/HeroSections");
        const data = response.data;
        console.log("HeroSection List: ", data);
        setHeroItems(data);
      } catch (error) {
        console.error("HeroSections verileri çekilirken bir hata oluştu:", error.message);
      }
    };
    fetchHeroItems();
  }, []);
  return (
    <>

      {
        heroItems.map((hero) => (

          <Carousel className="rounded-xl">
            <div className="relative h-full w-full">
              <img
                src={hero.image}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    {hero.title}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    {hero.subtitle}
                  </Typography>
                  <div className="flex justify-center gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Daha Fazlasını Keşfet
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>


        ))
      }



    </>

  );
};

export default HeroSection;
