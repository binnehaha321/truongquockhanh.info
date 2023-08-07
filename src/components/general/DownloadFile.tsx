"use client";

import Button from "@/components/general/Button";

const DownloadFile = () => {
	return (
		<Button
			onClick={() =>
				window?.open(
					"/files/CV_Software_Engineer_TruongQuocKhanh.pdf",
					"_blank"
				)
			}
		>
			Download CV
		</Button>
	);
};

export default DownloadFile;
