
#include <vector>
#include <string>
#include <algorithm>
#include <iterator>
#include <iostream>
#include <fstream>
#include <unordered_set>
class substring
{
private:
	std::string content;
	int word_length;
public:
	substring() : content(""), word_length(0) {};
	substring(std::string & s, int c) : content(s), word_length(c) {};
	void set(std::string & s)
	{
		content = s;
	}
	void clear()
	{
		content.clear();
	}
	void set_length(int c)
	{
		word_length = c;
	}
	void showinfo() const
	{
		std::cout << "Content is " + content << " Length is : " << word_length;
	}
	int take_length() const
	{
		return word_length;
	}
	std::string take_content() const
	{
		return content;
	}
};
int main()
{
	using namespace std;
	//read database file
	std::ifstream f_in("wordsEn.txt");
	if (!f_in.is_open()) //if read error, terminate program
	{
		cout << "Error opening library\n Exiting";
		exit(EXIT_FAILURE);
	}
	std::vector<string> library;
	string temp;
	while (!f_in.rdstate()) { f_in >> temp; library.insert(temp);} //else if read file successfully, import words into container
	f_in.close(); //close the stream
	std::string letters;
	cout << "Enter the letter grouping (quit to quit): ";
	while (cin >> letters && letters != "quit") //take combination of word
	{
		sort(letters.begin(), letters.end());
		int number_of_word;
		cout << "How many subword to be divided into? ";
		cin >> number_of_word;
		vector<substring> substring_collection;
		for (int i = 0; i < number_of_word; i++)
		{
			substring_collection.emplace_back();
		}
		for (auto & x : substring_collection)
		{
			cout << "How long is the word? :\n";
			int length;
			cin >> length;
			x.set_length(length);
		}
		cout << "\nFinding.... found: ";
		while (next_permutation(letters.begin(), letters.end())) //loop through possible permutations of the combination
		{
			int position_marker = 0; //serve specific purpose
			for (auto & x : substring_collection)
			{
				string temp;
				int k = x.take_length();
				try { temp = letters.substr(position_marker, k); }
				catch (out_of_range) { cout << "OUT OF RANGE"; }
				x.set(temp);
				position_marker += x.take_length();
			}
			if (all_of(substring_collection.begin(), substring_collection.end(), [&](substring & s) {return !(library.find(s.take_content()) == library.end()); }))
			{
				for (auto x : substring_collection)
				{
					cout << x.take_content() + " ";
				}
				cout << " ||| ";
			}
		}
		cout << "\nEnter the letter grouping (quit to quit): ";
	}
	return 0;
};
