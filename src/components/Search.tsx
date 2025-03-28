"use client";

import { Icon } from "@/app/icons/Icon";
import { FormEvent, useState } from "react";
import { KeyIcon } from "./KeyIcon";

type Props = {
  readonly action: (formData: FormData) => void;
  readonly placeholder: string;
  readonly label: string;
  readonly showLabel: boolean;
  readonly canKeyboardFocus: boolean;
};

export function Search(props: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.action(new FormData(event.currentTarget));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={`${!props.showLabel && "sr-only"}`} htmlFor="search">
        {props.label}
      </label>
      <div className="relative flex items-center">
        <button
          aria-label="search button"
          className="text-gray-700 align-middle absolute ml-2 "
        >
          <Icon name="search" size="small" />
        </button>
        <input
          id="search"
          type="search"
          name="search"
          placeholder={props.placeholder}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          autoComplete="off"
          className="text-gray-700 p-1 py-2 pl-7 bg-white border-2 border-gray-200 rounded-md w-full text-sm focus:outline-none"
        ></input>
        {!value && props.canKeyboardFocus && (
          <div className="ml-[-65px] flex items-center gap-1">
            <KeyIcon keyText="⌘" />
            <KeyIcon keyText="K" />
          </div>
        )}
      </div>
    </form>
  );
}
