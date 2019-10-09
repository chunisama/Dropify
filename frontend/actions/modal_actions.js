export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (songId, modal) => {
  return{
    type: OPEN_MODAL,
    modal,
    songId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};