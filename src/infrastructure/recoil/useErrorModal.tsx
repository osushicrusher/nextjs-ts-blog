import { atom, useRecoilState } from 'recoil';

const modalAtom = atom({
  key: 'ERROR_MODAL_ATOM',
  default: false,
});

export function useErrorModal() {
  const [errorModalState, setErrorModalState] = useRecoilState(modalAtom);

  const errorModalOpen = () => {
    setErrorModalState(true);
  };

  const errorModalClose = () => {
    setErrorModalState(false);
  };

  const errorModalToggle = () => {
    setErrorModalState(!errorModalState);
  };

  return {
    errorModalState,
    errorModalOpen,
    errorModalClose,
    errorModalToggle,
  } as const;
}
