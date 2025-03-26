type Props = {
  readonly keyText: string;
};

export function KeyIcon(props: Props) {
  return (
    <p className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
      {props.keyText}
    </p>
  );
}
