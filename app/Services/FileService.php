<?php

namespace App\Services;

class FileService
{
    public function updateFile($model, $request, $type)
    {
        if (!empty($model->file)) {
            $currentFile = public_path() . $model->file;

            if (file_exists($currentFile) && $currentFile != public_path() . '/user-placeholder.png') {
                unlink($currentFile);
            }
        }

        $image = $request->file('file');
        $destinationPath = public_path('/file/');
        $imageName = time() . '.' . $image->getClientOriginalExtension();

        if ($type === "user") {
            $this->resizeImage($image->getPathname(), $destinationPath . $imageName, 400, 400);
        } else {
            $image->move($destinationPath, $imageName);
        }

        $model->file = '/file/' . $imageName;

        return $model;
    }

    public function resizeImage($sourcePath, $destinationPath, $width, $height)
    {
        list($originalWidth, $originalHeight) = getimagesize($sourcePath);
        $src = imagecreatefromstring(file_get_contents($sourcePath));
        $dst = imagecreatetruecolor($width, $height);
        imagecopyresampled($dst, $src, 0, 0, 0, 0, $width, $height, $originalWidth, $originalHeight);
        imagejpeg($dst, $destinationPath);
        imagedestroy($src);
        imagedestroy($dst);
    }
}
