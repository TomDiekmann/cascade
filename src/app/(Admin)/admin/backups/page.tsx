"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Upload } from "lucide-react";
import React, { useState } from "react";

const AdminBackupPage = () => {
  const [backupFile, setBackupFile] = useState<File | null>(null);

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold">Sicherung</span>
          <span className="text-slate-500">
            Hier kannst du Backups der Datenbank erstellen und wiederherstellen
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">Backup herunterladen</span>
          <Button className="w-max" onClick={() => {}} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Backup herunterladen
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">Backup wiederherstellen</span>
          <div className="flex flex-row gap-2 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="backupFile">Backup</Label>
              <Input id="backupFile" type="file" accept=".json" required />
            </div>
            <Button
              variant="outline"
              className="w-max"
              disabled={!backupFile}
              onClick={() => {}}
            >
              <Upload className="mr-2 h-4 w-4" />
              Wiederherstellen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBackupPage;
