import { atom, useRecoilState } from 'recoil';

const modalAtom = atom({
  key: 'MODAL_ATOM',
  default: false,
});

export function useModal() {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  const modalOpen = () => {
    setModalState(true);
  };

  const modalClose = () => {
    setModalState(false);
  };

  const modalToggle = () => {
    setModalState(!modalState);
  };

  return { modalState, modalOpen, modalClose, modalToggle } as const;
}
