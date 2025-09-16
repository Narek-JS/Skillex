import React from "react";

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="20"
      height="20"
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c.321-.662 1.28-.662 1.6 0l1.944 4.022c.16.33.475.558.835.607l4.43.644c.73.106 1.022.998.494 1.508l-3.206 3.124a.99.99 0 00-.287.882l.757 4.412c.125.724-.638 1.28-1.29.945l-3.96-2.082a1.006 1.006 0 00-.936 0l-3.96 2.082c-.652.335-1.415-.221-1.29-.945l.757-4.412a.99.99 0 00-.287-.882l-3.206-3.124c-.528-.51-.236-1.402.494-1.508l4.43-.644a1.003 1.003 0 00.835-.607l1.944-4.022z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export { StarIcon };
