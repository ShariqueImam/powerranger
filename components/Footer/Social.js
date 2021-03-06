import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineMail ,AiOutlineReddit,AiOutlineWhatsApp} from "react-icons/ai";

const style = {
  wrapper:
    "flex mx-auto items-center justify-center gap-8 md:gap-12 my-8 md:my-4",
  social:
    "text-gray-100 hover:text-[#ffc900] text-7xl md:text-xl hover:mx-4 transition-all duration-[300ms] cursor-pointer",
};
const Social = () => {
  return (
    <div className={style.wrapper}>
      <a
        aria-label="link to  account facebook"
        className={style.social}
        target="_black"
        href="https://www.facebook.com/sharer/sharer.php?u=powerrangersgamesfree.com"
      >
        <BsFacebook className="text-2xl" />
      </a>
      <a
        aria-label="link to  account reddit"
        className={style.social}
        target="_black"
        href="https://www.reddit.com/submit?url=https%3A%2F%2Fpowerrangersgamesfree.com"
      >
        <AiOutlineReddit className="text-3xl" />
      </a>
      <a
        aria-label="link to  account twitter"
        className={style.social}
        target="_black"
        href="https://twitter.com/intent/tweet?text=https://www.powerrangersgamesfree.com"
      >
        <BsTwitter className="text-2xl" />
      </a>
 <a
href="whatsapp://send?text=https://powerrangersgamesfree.com"
                 target="__blank"
                className={style.social}
              >
<AiOutlineWhatsApp className="text-2xl"/>              </a>

 <a href="mailto:replymebycontactus@gmail.com" className={style.social}>
        <AiOutlineMail className="text-2xl" />
      </a>
    </div>
  );
};
export default Social;
