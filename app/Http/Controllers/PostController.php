<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Services\FileService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:jpg,jpeg,png',
            'text' => 'required|string',
            'titre' => 'required|string',
            'categorie' => 'required|string',
            'prix' => 'required|integer',
            'etat' => 'required|string',
            'localisation' => 'required|string',
        ]);

        $post = new Post;
        $post = (new FileService)->updateFile($post, $request, 'post');

        $post->user_id = auth()->user()->id;
        $post->text = $request->input('text');
        $post->titre = $request->input('titre');
        $post->categorie = $request->input('categorie');
        $post->prix = $request->input('prix');
        $post->etat = $request->input('etat');
        $post->localisation = $request->input('localisation');
        $post->save();

        return redirect()->route('home')->with('success', 'Post created successfully!');
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if (!empty($post->file)) {
            $currentFile = public_path() . $post->file;

            if (file_exists($currentFile)) {
                unlink($currentFile);
            }
        }

        $post->delete();

        return redirect()->route('home')->with('success', 'Post deleted successfully!');
    }
}
