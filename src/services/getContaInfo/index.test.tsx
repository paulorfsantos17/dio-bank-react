import { getContaInfo } from ".";

describe("getContaInfo", () => {
  const mockEmail: string = "paulo@dio.me";
  const mockName: string = "Paulo Santos";

  it("Deve retorna email", async () => {
    const response = await getContaInfo();

    expect(response.email).toBe(mockEmail);
    expect(response.name).toBe(mockName);
  });
});
