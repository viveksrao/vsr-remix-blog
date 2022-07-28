import { Link } from "@remix-run/react";

export default function AdminIndexRoute() {
  return (
    <p>
      <Link to="new" className="font-mono text-xl text-blue-600 no-underline">
        Create New Post
      </Link>
    </p>
  );
}