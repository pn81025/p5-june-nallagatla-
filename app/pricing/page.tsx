"use client";

import { addToast } from "@heroui/toast";
import { Image } from "@heroui/react";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <div>
      <h1 className={title({ color: "pink" })}>Movie Covers</h1>

      <p />
      <div className="flex gap-8 flex-wrap mt-8">
        <Image
          alt="im1"
          src="https://i.ebayimg.com/images/g/Sv8AAOSwb7Rc0l0P/s-l1200.jpg"
          width={200}
        />

        <Image
          alt="ih"
          src="https://image.tmdb.org/t/p/original/AqkdLeys77nWmC9kzVGVHDVAZx7.jpg"
          width={200}
        />

        <Image
          alt="im2"
          src="https://tse4.mm.bing.net/th/id/OIP.-o5_AObv-CCIBeeUsWi0rgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
          width={200}
        />

        <Image
          alt="thor"
          src="https://m.media-amazon.com/images/I/61MQ3JIiXmL.jpg"
          width={200}
        />

        <Image
          alt="catfs"
          src="https://tse4.mm.bing.net/th/id/OIP.YF6QFG0nCIdYDv9mRqV3IwHaKe?rs=1&pid=ImgDetMain&o=7&rm=3"
          width={200}
        />

        <Image
          alt="aveng"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/the-avengers-2012-poster.jpg"
          width={200}
        />

        <Image
          alt="im3"
          src="https://cdn.posteritati.com/posters/000/000/006/634/iron-man-3-md-web.jpg"
          width={200}
        />

        <Image
          alt="thrdw"
          src="https://tse1.mm.bing.net/th/id/OIP.MSMtRfiOgR3wKqJ1hMcLuwHaK-?rs=1&pid=ImgDetMain&o=7&rm=3"
          width={200}
        />

        <Image
          alt="catws"
          src="https://th.bing.com/th/id/R.7fd284a6c1f35f86119bb0fafb7b734b?rik=EjR3MCZIhFMHJA&riu=http%3a%2f%2fwww.impawards.com%2f2014%2fposters%2fcaptain_america_the_winter_soldier_ver8.jpg&ehk=ig8cz38LkVJoIwdfc%2fVEOD3%2fZOnrMyz22S16i1MwUAM%3d&risl=&pid=ImgRaw&r=0"
          width={200}
        />
        <Image
          alt="gotg"
          src="https://th.bing.com/th/id/R.8a4815d46368d0cd2efe195235d79468?rik=pH48wLuVtRHuXA&pid=ImgRaw&r=0"
          width={200}
        />

        <Image
          alt="aaou"
          src="https://th.bing.com/th/id/R.3d7ccad9e0c56302049a0954e2728674?rik=xRFCBAJnHgoucA&riu=http%3a%2f%2fwww.electric-shadows.com%2fwp-content%2fuploads%2f2015%2f04%2fAvengers-Age-of-Ultron-poster.jpg&ehk=g0hAUp%2bBRZObISHnn0loU9NKjRQefQP0iO5SMd2%2fL44%3d&risl=&pid=ImgRaw&r=0"
          width={200}
        />

        <Image
          alt="ant"
          src="https://i.ebayimg.com/images/g/KD0AAOSwW91jWLGS/s-l1200.jpg"
          width={200}
        />

        <Image
          alt="CW"
          src="https://juksun.com/wp-content/uploads/2023/02/Captain-America-Civil-War-Movie-Poster.jpg?scrlybrkr=4fbd67cd"
          width={200}
        />

        <Image
          alt="ds"
          src="https://th.bing.com/th/id/R.3b7cf1a97d8be8da4cc081a86398c110?rik=7RWS4aYLTNN0xg&riu=http%3a%2f%2fwww.impawards.com%2f2016%2fposters%2fdoctor_strange_ver5_xlg.jpg&ehk=35BWsRnLheMsiJf%2f1UBUJ%2fWRjHQKYzFlo0MhM7BvUTE%3d&risl=&pid=ImgRaw&r=0"
          width={200}
        />

        <Image
          alt="gotg2"
          src="https://th.bing.com/th/id/R.22bd8bfa9bb333cd01b65a06baf381ff?rik=bBsrmXRPvGH%2b4g&riu=http%3a%2f%2fwww.shockya.com%2fnews%2fwp-content%2fuploads%2fGotG2-movie-poster.jpg&ehk=HguXulHPp8F3zbO1n8A0ClKr43q%2bDfT6CqL32M%2fGYz0%3d&risl=&pid=ImgRaw&r=0"
          width={200}
        />

        <Image
          alt="smhc"
          src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2021/12/IMG_4475-scaled.jpeg"
          width={200}
        />

        <Image
          alt="thrr"
          src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Thor_Ragnarok_Thor_Poster.jpg/revision/latest?cb=20171108164937"
          width={200}
        />

        <Image
          alt="BP"
          src="https://www.momdoesreviews.com/wp-content/uploads/2017/07/BlackPanther-poster.jpg"
          width={200}
        />

        <Image
          alt="aiw"
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/avengers-infinity-war-poster.jpeg"
          width={200}
        />

        <Image
          alt="amw"
          src="https://pics.filmaffinity.com/ant_man_and_the_wasp-134147696-large.jpg"
          width={200}
        />

        <Image
          alt="cm"
          src="https://tse4.mm.bing.net/th/id/OIP.v-5LRsx6rH9Gyc37frA1ZQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
          width={200}
        />

        <Image
          alt="aeg"
          src="https://juksun.com/wp-content/uploads/2023/02/Avengers-Endgame-Movie-Poster.jpg"
          width={200}
        />

        <Image
          alt="smffh"
          src="https://i.etsystatic.com/15375993/r/il/da5434/1851039888/il_fullxfull.1851039888_459k.jpg"
          width={200}
        />
      </div>
    </div>
  );
}
