import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div className="bg-slate-900 w-full h-full">
          <div class="background-img">
		<div class="space"></div>
			<div class="wrapper">
				<div class="img-wrapper">
					<span>44</span>
				</div>
				<p>The page you are trying to search has been moved to another universe.</p>
				<Link to="/"><button type="button">GET ME HOME</button></Link>
			</div>
		</div>
    </div>

  );
}

export default NotFound;
