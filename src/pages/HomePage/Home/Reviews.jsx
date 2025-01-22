import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../SharedPages/Navbar/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();
  const { data: latest = [] } = useQuery({
    queryKey: ["latestReview"],
    queryFn: async () => {
      const res = axiosPublic.get("/threereviews");
      return (await res).data;
    },
  });

  return (
    <div>
      <SectionTitle
        title="Latest User Reviews"
        subTitle="What our clients say about us."
      ></SectionTitle>

      <div className="my-24">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {latest.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" flex flex-col items-center mx-20 bg-purple-400 py-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={review?.reviewDetails[0]?.image}
                  alt=""
                />
                <p>{review?.reviewDetails[0]?.name}</p>
                <p>
                  {review?.propertyTitle
                    ? review?.propertyTitle
                    : "Not Available"}
                </p>
                <h3 className="text-2xl text-white">{review.review}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
