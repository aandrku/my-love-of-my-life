import { useState } from 'react';

const place = "under Misha's bed";

export function GiftInstructionsPage() {
  const [giftFound, setGiftFound] = useState(false);
  const [giftUnwrapped, setGiftUnwrapped] = useState(false);

  const giftFoundHandler = () => {
    setGiftFound(true);
  };

  const giftUnwrappedHandler = () => {
    setGiftUnwrapped(true);
  };

  if (!giftFound) {
    return (
      <div>
        <div>Your gift is {place}</div>
        <div>Did you find it?</div>
        <div onClick={giftFoundHandler}>Yes</div>
      </div>
    );
  }

  if (!giftUnwrapped) {
    return (
      <div>
        <div>As you can see, your gift is wrapped.</div>
        <div>Make sure to unwrap it!</div>
        <div>Have you unwrapped the gift??</div>

        <div onClick={giftUnwrappedHandler}>Yes</div>
      </div>
    );
  }

  return (
    <div>
      <div>As you can see your gift is locked ;)</div>
      <div>
        I've prepared a few fun challenges for you, so you can have some fun
        before you get your gift
      </div>
      <div>Are you ready?</div>
      <div>Yes</div>
    </div>
  );
}
