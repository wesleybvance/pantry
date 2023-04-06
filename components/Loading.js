import React from 'react';

export default function Loading() {
  return (
    <div className="text-center mt-5">
      <div
        className="spinner-border text-danger"
        style={{
          width: '100px',
          height: '100px',
        }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
