import { EXTERNAL_API_URL_VERSION } from "../../constants/api/external-api.constants";
import { useAccountStore } from "../../store/account.store";
import { GameMode } from "../../types/game";

const GET_MATCHS = async ({
  mode,
  dataSize = 10,
}: {
  mode: GameMode;
  dataSize?: number;
}) => {
  const { account } = useAccountStore();

  if (!account) {
    throw new Error("Account not found");
  }

  const response = await fetch(
    `${EXTERNAL_API_URL_VERSION.V1}/lifetime/matches/eu/${account.account_username}/${account.account_tag}?mode=${mode}&page=1&size=${dataSize}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const ExternaleApiService = {
  GET_MATCHS,
};

export default ExternaleApiService;
