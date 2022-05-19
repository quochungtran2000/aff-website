import { Skeleton } from 'antd';
import React from 'react';
type IProps = {
  key: string | number;
};

export default function SkeletionProductCard(props: IProps) {
  return (
    <div key={props.key} className="max-w-sm bg-white rounded-lg shadow-md ">
      {/* <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"></div> */}
      <span>
        <Skeleton active className="p-2 rounded-t-lg max-w-full" style={{ width: '100%', height: '120px' }}></Skeleton>
      </span>
      <div className="px-2 pb-2">
        <a href={`/product/`} target="_blank" rel="noreferrer">
          <h5
            className="text-xs font-semibold tracking-tight text-gray-900"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
            }}
          >
            <Skeleton.Input active={true} block={true} />
          </h5>
        </a>
        <div className="font-normal text-rose-500 text-xs mt-1.5">
          <Skeleton.Input active={true} block={true} className="max-w-full" />
        </div>
        <Skeleton.Input active={true} block={true} className="max-w-full" />
      </div>
    </div>
  );
}
