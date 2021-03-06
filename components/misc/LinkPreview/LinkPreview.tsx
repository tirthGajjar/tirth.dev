import { Popover, Transition } from "@headlessui/react";
import { delay } from "lodash";
import Image from "next/image";
import { encode } from "qss";
import { useState } from "react";
import { usePopper } from "react-popper";

interface IProps {
  url: string;
  height?: number;
  width?: number;
}

export const LinkPreview: React.FC<IProps> = ({
  url,
  children,
  width = 320,
  height = 180,
}) => {
  const [show, setShow] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLElement | null>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top",
    strategy: "fixed",
  });
  const params = encode({
    url: url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": false,

    // To capture useful content, the screenshot viewport needs to be bigger
    // than our images but maintain the same ratio
    "viewport.width": 1280,
    "viewport.height": 720,
  });
  const src = `https://api.microlink.io/?${params}`;
  return (
    <Popover
      as="span"
      role="link"
      tabIndex={0}
      onFocus={() => delay(() => setShow(true), 500)}
      onBlur={() => delay(() => setShow(false), 500)}
      onMouseEnter={() => delay(() => setShow(true), 500)}
      onMouseLeave={() => delay(() => setShow(false), 500)}
    >
      <span ref={setReferenceElement}>{children}</span>
      {show && (
        <Popover.Panel
          static
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <Transition
            show={show}
            appear={true}
            className="rounded-xl shadow-xl max-h-[180px]"
            enter="transform transition duration-300 origin-bottom ease-out"
            enterFrom="opacity-0 translate-y-2 scale-0"
            enterTo="opacity-100 translate-y-0 scale-100"
          >
            <Image
              src={src}
              width={width}
              height={height}
              alt="external link preview"
              className="rounded-xl"
              role="presentation"
            />
          </Transition>
        </Popover.Panel>
      )}
    </Popover>
  );
};
