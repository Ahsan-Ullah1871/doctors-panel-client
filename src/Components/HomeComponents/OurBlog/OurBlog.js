import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import RashedImage from "../../../images/Rashed.png";
import CaudiImage from "../../../images/Caudi.png";
import JohnImage from "../../../images/patient2.png";

const BlogPost = [
	{
		Name: "Dr.Rashed Kabir",
		userPhoto: RashedImage,
		postDate: "09 Aug 2018",
		postTitle: "Check at least a doctor in a year for your teeth",
		postDescription:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dolor eveniet modi, sed dolorum placeat!",
	},
	{
		Name: "Dr. Caudi",
		userPhoto: CaudiImage,
		postDate: "22 Aug 2019",
		postTitle: "Check at least a doctor in a year for your teeth",
		postDescription:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dolor eveniet modi, sed dolorum placeat!",
	},
	{
		Name: "Dr. John Mitchel",
		userPhoto: JohnImage,
		postDate: "29 Aug 2020",
		postTitle: "Check at least a doctor in a year for your teeth",
		postDescription:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam dolor eveniet modi, sed dolorum placeat!",
	},
];

const OurBlog = () => {
	return (
		<div>
			<h6
				className="text-center mb-4"
				style={{ color: "#6ACECE" }}
			>
				OUR BLOG
			</h6>
			<h2 className="text-center mb-5 mt-2">
				From Our Blog News
			</h2>
			<div className="d-flex justify-content-center mt-5 pt-5">
				<div className="row">
					{BlogPost.map((post) => (
						<BlogCard post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OurBlog;
