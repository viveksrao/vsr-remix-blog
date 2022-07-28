import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { requireAdminUser } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUser(request);
  return json({});
};

export default function AdminIndexRoute() {
  return (
    <p>
      <Link to="new" className="font-mono text-xl text-blue-600 no-underline">
        Create New Post
      </Link>
    </p>
  );
}
