import React from "react";
import "./BlogCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ post }) => {
	return (
		<div className="  blogCard ">
			<div className="postHeader d-flex">
				<div className="userPhoto   mr-4">
					<img src={post.userPhoto} alt="" />
				</div>
				<div className="postDate">
					<p style={{ fontWeight: "bold" }}>
						{post.Name}
					</p>
					<p>{post.postDate}</p>
				</div>
			</div>
			<div className="postTitle mt-3 mb-3">
				<h6>{post.postTitle}</h6>
			</div>
			<div className="postDescription">
				<p>{post.postDescription}</p>
			</div>
			<div className="arrowIcon mb-5">
				<FontAwesomeIcon
					style={{ fontSize: "30px" }}
					icon={faLongArrowAltRight}
				/>
			</div>
		</div>
	);
};

export default BlogCard;
