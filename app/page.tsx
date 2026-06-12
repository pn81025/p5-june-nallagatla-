"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/react";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const thisDoesNothingToast = () => {
    addToast({
      title: "Hey!",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "pink" })}>
          MCU Movie Timeline: Infinity Saga&nbsp;
        </span>
        <br />

        <div className={subtitle({ class: "mt-4" })} />
      </div>

      <Button
        color="danger"
        radius="full"
        onPress={() => {
          thisDoesNothingToast();
        }}
      >
        Open Timeline Page
      </Button>
    </section>
  );
}
