import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  assignedTo?: UserWhereUniqueInput;
  createdAt?: Date;
  estimation?: number;
  id?: string;
  project?: ProjectWhereUniqueInput;
  startDate?: Date;
  status?: "new" | "pending" | "onHold" | "ongoing" | "done";
  title?: string;
  updatedAt?: Date;
};
